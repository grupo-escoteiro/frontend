import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { SectionTitle } from '../../../components/section-title';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';

export default function DetailsUser() {
  const [isVolunteer, setIsVolunteer] = useState(false);

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle
            className="pt-12 pb-14 whitespace-nowrap "
            content="Dados Detalhados"
          />
          <Button  
            variant="green"
            content="Ativo"
          />
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
                  <input 
                    type="number" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray text-social-black font-semibold rounded-md" 
                    disabled="true" 
                    defaultValue="300" 
                  />
                </div>
              </div>
              <div className="mt-4">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 rounded text-[#059A00] border-gray-300 focus:ring-[#059A00]" 
                  checked={isVolunteer} 
                  onChange={(e) => setIsVolunteer(e.target.checked)} 
                />
                <span className="ml-2 text-gray-700">Voluntário</span>
              </label>
            </div>
            {isVolunteer && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Ramo</label>
                <div className="mt-1 relative">
                  <select className="block px-3 py-2 bg-social-white border border-social-gray rounded-md appearance-none">
                    <option>LOBINHO</option>
                  </select>
                </div>
              </div>
            )}
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
            <div className="flex justify-end items-center gap-x-4">
            <Link className="text-social-red transition duration-500 hover:brightness-50">
              Voltar
            </Link>
              <Button 
                variant="green"
                content="Atualizar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DetailsUser };