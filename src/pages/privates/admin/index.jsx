import { useState } from 'react';
import { Pencil, Trash2, ChevronLeft, ChevronRight, BookUser } from 'lucide-react';
import { SectionTitle } from '../../../components/section-title';
import { dadosPorPagina, maskEmail, truncateName } from '../../../helpers/admin-validate';
import { IconVolunteers } from './components/cube-icon-volunteers';
import { IconChildren } from './components/cube-icon-children';
import { IconResponsible } from './components/cube-icon-reponsible';

const users = [
  { name: 'Matheus Natieli', ramo: 'Lobinho', status: 'Inativo', 
    genero: 'Masculino', email: 'matheusg.safadinha@gmail.com' 
  },
  { name: 'Ryan Brabox', ramo: 'Júnior', status: 'Ativo', 
    genero: 'Masculino', email: 'ryaanziiiin.brabox@gmail.com' 
  },
  { name: 'Dani Psicopata da Mata', ramo: 'Lobinho', status: 'Ativo', 
    genero: 'Masculino', email: 'psicopata.da.mata@gmail.com' 
  },
  { name: 'Pai de Família Barbie', ramo: 'Lobinho', status: 'Ativo', 
    genero: 'Masculino', email: 'barbiezinha@gmail.com' 
  },
  { name: 'Alemão do Horto', ramo: 'Lobinho', status: 'Inativo', 
    genero: 'Masculino', email: 'alemao.horto@gmail.com' 
  },
  { name: 'Jão Pé de Feijão', ramo: 'Júnior', status: 'Inativo', 
    genero: 'Masculino', email: 'feijao.pe@gmail.com' 
  },
  { name: 'Ícaro Vegano', ramo: 'Lobinho', status: 'Inativo', 
    genero: 'Masculino', email: 'i.vegano@gmail.com' 
  },
  { name: 'Dj Tiossão', ramo: 'Júnior', status: 'Ativo', 
    genero: 'Masculino', email: 'dj.tiosso@gmail.com' 
  },
  { name: 'Gustavo Matonense', ramo: 'Lobinho', status: 'Inativo', 
    genero: 'Masculino', email: 'futebol.matonense@gmail.com' 
  },
  { name: 'Carequinha', ramo: 'Júnior', status: 'Ativo', 
    genero: 'Masculino', email: 'carequinha.com.cabelo@gmail.com' 
  },
  { name: 'Alekão da Massa', ramo: 'Lobinho', status: 'Ativo', 
    genero: 'Masculino', email: 'alekao.massa@gmail.com' 
  },
  { name: 'Lucão Sub15', ramo: 'Júnior', status: 'Inativo', 
    genero: 'Masculino', email: 'rei.delas.sub15@gmail.com' 
  }
];

function Admin() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / dadosPorPagina);
  const startIndex = (currentPage - 1) * dadosPorPagina;
  const endIndex = startIndex + dadosPorPagina;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div className="pt-16 pb-12">
      <section className="max-w-[1160px] mx-auto">
        <SectionTitle 
          content="Painel Administrativo" 
          className="pb-14"
        />
        <div className="flex gap-x-10 pb-14">        
          <IconVolunteers />
          <IconChildren />
          <IconResponsible />
        </div>
        <div className="overflow-x-auto bg-green-50 rounded-lg shadow-default">
          <table className="w-full">
            <thead>
              <tr className="text-left text-2xl border-b border-gray-200">
                <th className="p-3 font-bold text-green-600">Nome</th>
                <th className="p-3 font-bold text-center text-green-600">Ramo</th>
                <th className="p-3 text-center font-bold text-green-600">Status</th>
                <th className="p-3 font-bold text-center text-green-600">Sexo</th>
                <th className="p-3 font-bold text-green-600">Email</th>
                <th className="p-3 font-bold text-center text-green-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index} className={user.status === 'Ativo' ? 'bg-green-50' : 'bg-white'}>
                  <td className="p-3">
                    <span title={user.name}>{truncateName(user.name)}</span>
                  </td>
                  <td className="p-3 text-center">{user.ramo}</td>
                  <td className="p-3 flex justify-center">
                    <span
                      className={`flex items-center justify-center cursor-default select-none
                                  w-24 h-8 rounded text-base font-semibold
                                  transition duration-500 hover:brightness-75 ${
                                  user.status === 'Ativo' ? 'bg-green-600 text-social-white' : 
                                  'bg-social-red text-social-white' }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">{user.genero}</td>
                  <td className="p-3">{maskEmail(user.email)}</td>
                  <td className="p-3 flex justify-center">
                    <div className="flex space-x-2">
                      <button 
                        type="button"
                        className="text-blue-600 transition duration-500 hover:brightness-50"
                      >
                        <Pencil size={20} />
                      </button>
                      <button 
                        type="button"
                        className="text-red-600 transition duration-500 hover:brightness-50"
                      >
                        <Trash2 size={20} />
                      </button>
                      <button 
                        type="button"
                        className="text-green-600 transition duration-500 hover:brightness-50"
                      >
                        <BookUser size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
                  Página {currentPage} de {totalPages}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded font-semibold transition duration-500 ${
                          currentPage === 1
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-social-brand text-social-white hover:brightness-90'
                      }`}
            >
              <ChevronLeft className="h-4 w-4 inline mr-1" />
                      Anterior
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded font-semibold transition duration-500 ${
                          currentPage === totalPages
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-social-brand text-social-white hover:brightness-90'
                      }`}
            >
                      Próxima
              <ChevronRight className="h-4 w-4 inline ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Admin };