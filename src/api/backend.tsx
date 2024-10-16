import axios from "axios";
import { useState } from "react";

export const axiosinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

export class Backend_Acesso {
    listarTodos() {
        return axiosinstance.get("/");
    }

    async login(login: string, password: string) {
        try {
            const response = await axiosinstance.post("/auth", {
                login: login,
                password: password,
            });
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async cadastrarUsuario(data: { name: string, email: string, login: string, password: string, type_user: number }, token: string) {
        try {
            const response = await axiosinstance.post("/user", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async listarProdutos() {
        try {
            const response = await axiosinstance.get("/produtos");
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async listarProdutosDetalhe(id_codigo: string) {
        try {
            const id_codigo_number = Number(id_codigo);

            if (isNaN(id_codigo_number)) {
                throw new Error('O ID Código obtido do localStorage não é um número válido');
            }

            const response = await axiosinstance.get(`/produtos_detalhes/${id_codigo_number}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar detalhes do produto:', error);
            throw error;
        }
    }

    async listarEstruturas(codigo: string) {
      const cod = codigo
        try {
            const response = await axiosinstance.get(`/estruturas/${codigo}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async listarRoteiros(produto: string) {
      const codigo_roteiro = produto
        try {
            const response = await axiosinstance.get(`/roteiros/${codigo_roteiro}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    async listarRevisao(status_revisao: string) {
      const statusrevisao = Number(status_revisao);
      console.log(statusrevisao)
      try {
          const response = await axiosinstance.get(`/status_revisao/${statusrevisao}`);
          console.log(response)
          return response.data;
      } catch (error) {
          throw error;
      }
  }
}
