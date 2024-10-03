import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { SectionTitle } from '../../../components/section-title';

export default function DetailsUser() {
  const [isVolunteer, setIsVolunteer] = useState(false);

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex items-center justify-start">
          <SectionTitle
            className="pt-12 pb-14 whitespace-nowrap "
            content="Dados Detalhados"
          />
          <button
            type="submit"
            className="ml-[740px] rounded font-bold text-4 uppercase text-social-white py-[10px]
      px-[75px] inline-flex items-center justify-center gap-x-[10px]
      transition duration-500 hover:brightness-90 shadow-default
      bg-social-brand
    ">
            Ativo
          </button>
        </div>

        <div className="max-w-full mx-auto p-10 bg-white shadow-lg rounded-lg">
          <div className="space-y-20 px-20">
            <section>
              <h2 className="text-lg font-semibold mb-4 ">Informações pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome completo</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="LOURDES FRANCISCA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
                  <input type="text" className="mt-1 block w-full px-10 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="10/11/1980" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CPF</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="111.000.222-17" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sexo</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="MASCULINO" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="(16) 99884-9800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="LOUR@GMAIL.COM" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CEP</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="15980-000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rua</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="MATHILDE BERNARDO" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bairro</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="DOBRADA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cidade</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="TIOZINHO SAN" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estado</label>
                  <div className="mt-1 relative">
                    <select className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md appearance-none">
                      <option>SP</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número da residência</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="300" />
                </div>
              </div>
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked={isVolunteer} onChange={(e) => setIsVolunteer(e.target.checked)} />
                  <span className="ml-2 text-gray-700">Voluntário</span>
                </label>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Ramo</label>
                <div className="mt-1 relative">
                  <select className="block  px-3 py-2 bg-gray-100 border border-gray-300 rounded-md appearance-none">
                    <option>LOBINHO</option>
                  </select>

                </div>
              </div>
            </section>

            <section className='py-16'>
              <h2 className="text-lg font-semibold mb-4">Informações do escoteiro</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome completo</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="LOURDES FRANCISCA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="10/11/1980" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CPF</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="111.000.222-17" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sexo</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="MASCULINO" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="(16) 99884-9800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="LOUR@GMAIL.COM" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CEP</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="15980-000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rua</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="MATHILDE BERNARDO" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bairro</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="DOBRADA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cidade</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="TIOZINHO SAN" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estado</label>
                  <div className="mt-1 relative">
                    <select className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md appearance-none">
                      <option>SP</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número da residência</label>
                  <input type="text" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" defaultValue="300" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Ramo</label>
                <div className="mt-1 relative">
                  <select className="block  px-3 py-2 bg-gray-100 border border-gray-300 rounded-md appearance-none">
                    <option>LOBINHO</option>
                  </select>

                </div>
              </div>
            </section>

            <div className="flex justify-end space-x-4">
              <a className="text-social-red transition duration-500 hover:brightness-50" href="/admin">Voltar</a>
              <button
                type="submit"
                className=" rounded font-bold text-4 uppercase text-social-white py-[10px]
      px-[75px] inline-flex items-center justify-center gap-x-[10px]
      transition duration-500 hover:brightness-90 shadow-default
      bg-social-brand
    ">Ativo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DetailsUser };