import clientPromise from "../../lib/mongodb";
import nodemailer from "nodemailer";

const handler = async (
  req: { method: string; body: { email: string } },
  res: {
    status: (arg0: number) => {
      (): any; // eslint-disable-line
      new (): any; // eslint-disable-line
      json: {
        (arg0: { error?: string; message?: string; details?: string }): void;
        new (): any; // eslint-disable-line
      };
    };
  }
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Correo electrónico inválido" });
  }

  try {
    // Conecta con MongoDB
    const client = await clientPromise;
    const db = client.db("SpaceAppDB");
    const collection = db.collection("registrations");

    // Verifica si el correo ya existe
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Correo ya registrado" }); // Código 409 para conflicto
    }

    // Inserta el registro en la base de datos
    try {
      await collection.insertOne({ email, timestamp: new Date() });
    } catch (dbError) {
      console.error("Error al insertar en la base de datos:", dbError);
      return res.status(500).json({
        error: "Error al registrar el correo.",
        details: dbError instanceof Error ? dbError.message : "Error desconocido",
      });
    }

    // Configura Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY, // Leer la API Key desde el .env.local
      },
    });

    // Envía el correo
    await transporter.sendMail({
      from: `"Space App" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      cc: email,
      subject: "Nuevo registro en la lista de espera de Space App",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; color: #333; padding: 20px; line-height: 1.5;">
            <img 
                src="${process.env.SUPABASE_IMAGE_URL}" 
                alt="Space App Banner" 
                style="max-width: 50%; height: auto; margin-top: 20px; border-radius: 10px;" 
            />
            <h1 style="color: #4B5563; margin-top: 20px;">¡Te has unido a Space App!</h1>
            <p>¡Gracias por registrarte en nuestra lista de espera! Estamos emocionados de tenerte a bordo.</p>
            <p>Muy pronto podrás disfrutar de una experiencia única para conectar con tu comunidad universitaria.</p>
            <p>
                <strong>Email registrado:</strong> ${email}
            </p>
            <p style="margin-top: 20px;">Mientras tanto, síguenos en nuestras redes sociales para estar al tanto de las últimas novedades y actualizaciones:</p>
            <div style="margin-top: 20px; text-align: center; font-size: 16px;">
                <p><a href="https://www.instagram.com/amoxtli.tech/" target="_blank" rel="noopener noreferrer" style="color: #7373FF; text-decoration: none;">Instagram</a></p>
                <p><a href="https://www.linkedin.com/company/amoxtli-web-developers" target="_blank" rel="noopener noreferrer" style="color: #7373FF; text-decoration: none;">LinkedIn</a></p>
            </div>
            <p style="color: #7373FF; font-weight: bold; margin-top: 20px;">
                ¡Gracias por ser parte de Space App!
            </p>
            <a href="https://www.spaceapp.mx" 
                style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #7373FF; color: #fff; text-decoration: none; border-radius: 50px;">
                Visita nuestra web
            </a>
        </div>
      `,
    });

    res.status(200).json({ message: "Registro exitoso" });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      details: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};

export default handler;
