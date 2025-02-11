import {reqtsApiForm} from '../../../config/Utils'
export const sendMessageApi = async (data) => {
    return reqtsApiForm('v1/chatboot/sendmesaje', 'POST', false);
}

export const getChatHistory= async () => {
    return reqtsApiForm('v1/chatboot/history', 'POST', false);
}