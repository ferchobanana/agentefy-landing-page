import sql from "$lib/db/db.js"

export const actions = {
    save_form: async ({ request }) => {
        const form_data = await request.formData()

        const schedule = {
            name: form_data.get("name") as string,
            phone_number: form_data.get("phone_number") as string,
        }

        try {
            const res = await sql`
                            INSERT INTO schedules
                            ${sql(schedule, "name", "phone_number")}
                        `
            console.log(res)
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