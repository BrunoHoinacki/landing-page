// server/api/saveForm.ts
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone } = body;

  try {
    await addDoc(collection(db, "submissions"), {
      name,
      email,
      phone,
      timestamp: new Date(),
    });
    return { message: 'Dados recebidos com sucesso!' };
  } catch (e) {
    if (e instanceof Error) {
      return { message: 'Erro ao salvar os dados', error: e.message };
    } else {
      return { message: 'Erro desconhecido' };
    }
  }
});
