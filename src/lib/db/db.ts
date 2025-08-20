import postgres from 'postgres'

const connectionString = "postgresql://agentefy_owner:kWhQxSjud2a6@ep-dawn-sea-a5nrpsde-pooler.us-east-2.aws.neon.tech/agentefy-forms?sslmode=require&channel_binding=require"
const sql = postgres(connectionString)

export default sql