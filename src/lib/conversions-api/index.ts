import { error } from '@sveltejs/kit';
import bizSdk from 'facebook-nodejs-business-sdk';

// Configuración de las variables de entorno
const ACCESS_TOKEN = ""
const PIXEL_ID = "";

// Verificar que las variables de entorno estén configuradas
if (!ACCESS_TOKEN || !PIXEL_ID) {
    throw new Error('META_ACCESS_TOKEN y META_PIXEL_ID deben estar configurados en las variables de entorno');
}

// Inicializar el SDK
const { Content, CustomData, DeliveryCategory, EventRequest, UserData, ServerEvent, FacebookAdsApi } = bizSdk;
const api = FacebookAdsApi.init(ACCESS_TOKEN);

// Interfaz para los parámetros del evento
interface ConversionEventParams {
    eventName: string;
    email?: string;
    phone?: string;
    productId?: string;
    quantity?: number;
    value?: number;
    currency?: string;
    eventSourceUrl?: string;
}

// Función para enviar evento a Meta
export async function sendConversionEvent(
    params: ConversionEventParams,
    clientIp: string,
    userAgent: string,
    fbp?: string,
    fbc?: string
): Promise<any> {
    try {
        const current_timestamp = Math.floor(new Date().getTime() / 1000);

        // Configurar datos del usuario
        const userData = new UserData();

        if (params.email) {
            userData.setEmails([params.email]);
        }

        if (params.phone) {
            userData.setPhones([params.phone]);
        }

        userData
            .setClientIpAddress(clientIp)
            .setClientUserAgent(userAgent);

        if (fbp) {
            userData.setFbp(fbp);
        }

        if (fbc) {
            userData.setFbc(fbc);
        }

        // Configurar contenido del producto (opcional)
        let customData = new CustomData();

        if (params.productId) {
            const content = new Content()
                .setId(params.productId)
                .setQuantity(params.quantity || 1)
                .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

            customData = customData.setContents([content]);
        }

        if (params.currency) {
            customData = customData.setCurrency(params.currency);
        }

        if (params.value) {
            customData = customData.setValue(params.value);
        }

        // Crear el evento del servidor
        const serverEvent = new ServerEvent()
            .setEventName(params.eventName)
            .setEventTime(current_timestamp)
            .setUserData(userData)
            .setCustomData(customData)
            .setActionSource('website');

        if (params.eventSourceUrl) {
            serverEvent.setEventSourceUrl(params.eventSourceUrl);
        }

        // Crear y ejecutar la petición
        const eventRequest = new EventRequest(ACCESS_TOKEN, PIXEL_ID)
            .setEvents([serverEvent]);

        const response = await eventRequest.execute();
        return response;

    } catch (err) {
        console.error('Error enviando evento a Meta:', err);
        throw err;
    }
}