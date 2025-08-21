import sql from "$lib/db/db.js"
// import { sendConversionEvent } from "$lib/conversions-api/index.js";

export const actions = {
    save_form: async ({ request, url, cookies }) => {
        // Obtener información de la petición
        const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
        const userAgent = request.headers.get('user-agent') || '';

        // Obtener cookies de Facebook (si existen)
        const fbp = cookies.get('_fbp');
        const fbc = cookies.get('_fbc');

        // Data del formulario
        const form_data = await request.formData()

        const schedule = {
            name: form_data.get("name") as string,
            email: form_data.get("email") as string,
            phone_number: form_data.get("phone_number") as string,
        }

        try {
            const res = await sql`
                            INSERT INTO schedules
                            ${sql(schedule, "name", "email", "phone_number")}
                        `
            
            // const purchaseEvent = await sendConversionEvent(
            //     {
            //         eventName: 'Lead',
            //         email: schedule.email,
            //         phone: schedule.phone_number,
            //         eventSourceUrl: url.toString()
            //     },
            //     clientIp,
            //     userAgent,
            //     fbp,
            //     fbc
            // );

            // console.log(purchaseEvent)

            return { success: true }
        }
        catch {}

        return {}
    },
    save_date: async ({ request }) => {
        const form_data = await request.formData()
        const phone_number = form_data.get("phone_number") as string

        const schedule = {
            hour: form_data.get("hora") as string,
            day: form_data.get("day") as string,
            month: form_data.get("month") as string,
            year: form_data.get("year") as string,
        }

        try {
            const res = await sql`
                            UPDATE schedules
                            SET ${ sql(schedule, "hour", "day", "month", "year") }
                            WHERE phone_number = ${ phone_number }
                        `
            console.log(res)
            return { success: true }
        }
        catch {}
    }
}