
export interface Contribuentes{
    id: number
    nome: string
    email: string
    cpf: string
    telefone:string
    celular:string
    rua:string
    enderecos:[
        {
            rua:string,
            numero:string,
            bairro:string,
            cidade:string,
            cep:string,
            pais:string,
            estado:string
        }
       

    ]

  
   
}