import { useEffect, useState } from 'react';
import { Pencil, Trash2, ChevronLeft, ChevronRight, BookUser, Search } from 'lucide-react';
import { SectionTitle } from '../../../components/section-title';
import { dadosPorPagina, maskEmail, truncateName } from '../../../helpers/admin-validate';
import { IconVolunteers } from './components/cube-icon-volunteers';
import { IconChildren } from './components/cube-icon-children';
import { IconResponsible } from './components/cube-icon-reponsible';
import { PageTransition } from '../../../components/page-transition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


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

  const { t } = useTranslation ();


  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / dadosPorPagina);
  const startIndex = (currentPage - 1) * dadosPorPagina;
  const endIndex = startIndex + dadosPorPagina;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <PageTransition>
      <div className="pt-16 pb-12">
        <section className="max-w-[1160px] mx-auto">
          <SectionTitle 
            content={t('admin.content')}
            className="pb-14"
          />
          <div className="flex gap-x-10 pb-14">        
            <IconVolunteers />
            <IconChildren />
            <IconResponsible />
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder={t('admin.placeBuscar')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 rounded border border-social-gray focus:outline-none 
                         focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="overflow-x-auto mt-10 bg-green-50 rounded-lg shadow-default">
            <table className="w-full">
              <thead>
                <tr className="text-left text-2xl border-b border-gray-200">
                  <th className="p-3 font-bold text-green-600">{t('admin.name')}</th>
                  <th className="p-3 font-bold text-center text-green-600">{t('admin.ramo')}</th>
                  <th className="p-3 text-center font-bold text-green-600">{t('admin.status')}</th>
                  <th className="p-3 font-bold text-center text-green-600">{t('admin.sexo')}</th>
                  <th className="p-3 font-bold text-green-600">{t('admin.email')}</th>
                  <th className="p-3 font-bold text-center text-green-600">{t('admin.acoes')}</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr 
                    key={index} 
                    className={user.status === 'Ativo' ? 'bg-green-50' : 'bg-white'}
                  >
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
                        <Link 
                          to=""
                          className="text-blue-600 transition duration-500 hover:brightness-50"
                        >
                          <Pencil size={20} />
                        </Link>
                        <Link 
                          to=""
                          className="text-red-600 transition duration-500 hover:brightness-50"
                        >
                          <Trash2 size={20} />
                        </Link>
                        <Link
                          to="/details"
                          className="text-green-600 transition duration-500 hover:brightness-50"
                        >
                          <BookUser size={20} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className={`${filteredUsers.length === 0 ? 'text-gray-400' : ''}`}>
              {filteredUsers.length === 0 ? (
                'Nenhum resultado encontrado'
              ) : (
                `Página ${currentPage} de ${totalPages}`
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || filteredUsers.length === 0}
                className={`px-4 py-2 rounded font-semibold transition duration-500 ${
                  currentPage === 1 || filteredUsers.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-social-brand text-social-white hover:brightness-90'
                }`}      
              >
                <ChevronLeft className="h-4 w-4 inline mr-1" />
                {t('admin.buttomAnterior')}
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages || filteredUsers.length === 0}
                className={`px-4 py-2 rounded font-semibold transition duration-500 ${
                          currentPage >= totalPages || filteredUsers.length === 0
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-social-brand text-social-white hover:brightness-90'
                      }`}
              >
                {t('admin.buttomProxima')}
                <ChevronRight className="h-4 w-4 inline ml-1" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export { Admin };