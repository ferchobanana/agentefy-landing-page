import sql from "$lib/db/db.js"
import { fail } from "@sveltejs/kit"

export const actions = {
    default: async ({ request }) => {
        const form_data = await request.formData()

        const submission = {
            nombre: form_data.get("nombre") as string,
            correo: form_data.get("correo") as string,
            negocio: form_data.get("negocio") as string
        }

        console.log(submission)

        try {
            const res = await sql`
                                INSERT INTO "3_months_pre"
                                ${sql(submission, "nombre", "correo", "negocio")}
                            `
            
            return { success: true }
        }
        catch (err){ console.log(err); return fail(400, { message: "Parece que hubo un errro en el registro" })}
    }
}