import sql from "$lib/db/db.js"
import { redirect } from "@sveltejs/kit"

export const actions = {
    default: async ({ request }) => {
        const form_data = await request.formData()

        const schedule = {
            name: form_data.get("name") as string,
            email: form_data.get("email") as string,
            hour: form_data.get("hora") as string,
            day: form_data.get("day") as string,
            month: form_data.get("month") as string,
            year: form_data.get("year") as string,
        }

        try {
            const res = await sql`
                            INSERT INTO schedules
                            ${ sql(schedule, "name", "email", "hour", "day", "month", "year") }
                        `
            console.log(res)
            return { success: true }
        }
        catch {}
    }
}