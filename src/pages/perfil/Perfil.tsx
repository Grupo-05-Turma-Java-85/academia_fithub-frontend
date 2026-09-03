import { useState, useEffect } from 'react';
import {
  User,
  Hourglass,
  Ruler,
  Calendar,
  FloppyDisk,
  Barbell,
  PencilSimple,
  Clock,
} from '@phosphor-icons/react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Perfil() {
  // ============================================================
  // CONFIGURAÇÃO DA API
  // ============================================================
  const API_URL = 'https://SEU-BACKEND.onrender.com';

  // ID do usuário logado
  // ATENÇÃO: depois podemos trocar isso pelo ID vindo do login
  const [usuarioId] = useState<number>(1);

  // ============================================================
  // ESTADOS
  // ============================================================
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [experience, setExperience] = useState('');
  const [frequencia, setFrequencia] = useState<number | null>(null);
  const [foto, setFoto] = useState('');
  const [loading, setLoading] = useState(true);

  // ============================================================
  // CARREGAR PERFIL
  // ============================================================
  useEffect(() => {
    async function carregarPerfil() {
      try {
        const response = await axios.get(
          `${API_URL}/usuarios/${usuarioId}`
        );

        const dados = response.data;

        console.log('Dados recebidos da API:', dados);

        setName(dados.nome || '');
        setEmail(dados.usuario || '');
        setWeight(
          dados.peso !== null && dados.peso !== undefined
            ? String(dados.peso)
            : ''
        );
        setHeight(
          dados.altura !== null && dados.altura !== undefined
            ? String(dados.altura)
            : ''
        );
        setBirthDate(dados.dataNascimento || '');
        setExperience(
          dados.nivel ? dados.nivel.toUpperCase() : ''
        );
        setFrequencia(
          dados.frequenciaSemanal !== null &&
            dados.frequenciaSemanal !== undefined
            ? dados.frequenciaSemanal
            : null
        );
        setFoto(dados.foto || '');

      } catch (error) {
        console.error('Erro ao carregar perfil:', error);

        if (axios.isAxiosError(error)) {
          console.error('Status:', error.response?.status);
          console.error('Resposta:', error.response?.data);
        }

        toast.error('Erro ao carregar os dados do perfil.');

      } finally {
        setLoading(false);
      }
    }

    carregarPerfil();
  }, [usuarioId]);

  // ============================================================
  // SALVAR ALTERAÇÕES
  // ============================================================
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    // Converte vírgula para ponto
    const peso = parseFloat(weight.replace(',', '.'));
    const altura = parseFloat(height.replace(',', '.'));

    // ==========================================================
    // VALIDAÇÕES
    // ==========================================================

    if (!name.trim()) {
      toast.error('Informe seu nome.');
      return;
    }

    if (!email.trim()) {
      toast.error('Informe seu e-mail.');
      return;
    }

    if (isNaN(peso) || peso <= 0) {
      toast.error('Informe um peso válido.');
      return;
    }

    if (isNaN(altura) || altura <= 0) {
      toast.error('Informe uma altura válida.');
      return;
    }

    if (!birthDate) {
      toast.error('Informe sua data de nascimento.');
      return;
    }

    if (!experience) {
      toast.error('Selecione seu nível de experiência.');
      return;
    }

    if (frequencia === null) {
      toast.error('Selecione sua frequência semanal.');
      return;
    }

    // ==========================================================
    // PAYLOAD
    // ==========================================================

    const payload = {
      id: usuarioId,
      nome: name,
      usuario: email,
      foto: foto,
      peso: peso,
      altura: altura,
      dataNascimento: birthDate,
      nivel: experience,
      frequenciaSemanal: frequencia,
    };

    console.log('Enviando para API:', payload);

    // ==========================================================
    // REQUISIÇÃO
    // ==========================================================

    try {
      const response = await axios.put(
        `${API_URL}/usuarios/atualizar`,
        payload
      );

      console.log('Resposta do servidor:', response.data);

      toast.success('Perfil atualizado com sucesso!');

    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);

      if (axios.isAxiosError(error)) {
        console.error('Status:', error.response?.status);
        console.error('Resposta:', error.response?.data);
        console.error('Mensagem:', error.message);
      }

      toast.error('Erro ao atualizar perfil no servidor.');
    }
  };

  // ============================================================
  // LOADING
  // ============================================================

  if (loading) {
    return (

      <div className="bg-[#0b0b0e] min-h-screen">
        <div className="min-h-screen w-full flex items-center justify-center text-purple-400 font-semibold">
          Carregando dados do perfil...
        </div>
      </div>
    );
  }

  // ============================================================
  // TELA
  // ============================================================

  return (
    <div className='bg-[#0b0b0e] py-20'>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 bg-[#0b0b0e] text-neutral-200">

        {/* Cabeçalho do Perfil */}
        <div className="flex flex-col items-center mb-6 text-center">

          <div className="relative mb-3">

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-lg shadow-purple-950/50">

              <img
                src={
                  foto ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
                }
                alt={name || 'Perfil'}
                className="w-full h-full rounded-full object-cover"
              />

            </div>

            <button
              type="button"
              aria-label="Editar foto de perfil"
              className="absolute bottom-0 right-0 bg-[#18191c] hover:bg-neutral-800 border border-neutral-700 text-purple-300 p-2 rounded-full transition shadow-md"
            >
              <PencilSimple size={16} weight="bold" />
            </button>

          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {name || 'Usuário'}
          </h1>

        </div>

        {/* Card do Formulário */}
        <div className="w-full max-w-[480px] bg-[#121316] p-6 sm:p-8 rounded-2xl border border-neutral-800/80 shadow-2xl shadow-purple-950/20">

          <form
            onSubmit={handleSave}
            className="flex flex-col gap-5"
          >

            {/* Nome Completo */}
            <div>

              <label
                htmlFor="name"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2 text-neutral-300"
              >
                <User
                  size={16}
                  className="text-purple-400"
                />

                Nome Completo
              </label>

              <div className="flex items-center bg-[#18191c] border border-neutral-800 focus-within:border-purple-500 rounded-xl px-3.5 py-3 transition-colors">

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João Silva"
                  className="bg-transparent border-none outline-none w-full text-sm text-white font-medium"
                />

              </div>

            </div>

            {/* Peso e Altura */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Peso */}
              <div>

                <label
                  htmlFor="weight"
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2 text-neutral-300"
                >
                  <Hourglass
                    size={16}
                    className="text-purple-400"
                  />

                  Peso (kg)
                </label>

                <div className="flex items-center justify-between bg-[#18191c] border border-neutral-800 focus-within:border-purple-500 rounded-xl px-3.5 py-3 transition-colors">

                  <input
                    id="weight"
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent border-none outline-none w-full text-sm text-white font-medium"
                  />

                  <span className="text-xs text-neutral-500 font-semibold ml-2">
                    kg
                  </span>

                </div>

              </div>

              {/* Altura */}
              <div>

                <label
                  htmlFor="height"
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2 text-neutral-300"
                >
                  <Ruler
                    size={16}
                    className="text-purple-400"
                  />

                  Altura (cm)
                </label>

                <div className="flex items-center justify-between bg-[#18191c] border border-neutral-800 focus-within:border-purple-500 rounded-xl px-3.5 py-3 transition-colors">

                  <input
                    id="height"
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent border-none outline-none w-full text-sm text-white font-medium"
                  />

                  <span className="text-xs text-neutral-500 font-semibold ml-2">
                    cm
                  </span>

                </div>

              </div>

            </div>

            {/* Data de Nascimento */}
            <div>

              <label
                htmlFor="birthDate"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2 text-neutral-300"
              >
                <Calendar
                  size={16}
                  className="text-purple-400"
                />

                Data de Nascimento
              </label>

              <div className="flex items-center bg-[#18191c] border border-neutral-800 focus-within:border-purple-500 rounded-xl px-3.5 py-3 transition-colors">

                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-sm text-white font-medium color-scheme-dark"
                />

              </div>

            </div>

            {/* Nível de Experiência */}
            <div className="pt-1">

              <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2.5 text-neutral-300">

                <Barbell
                  size={16}
                  className="text-purple-400"
                />

                Nível de Experiência

              </label>

              <div className="grid grid-cols-3 gap-2">

                {[
                  {
                    label: 'Iniciante',
                    value: 'INICIANTE',
                  },
                  {
                    label: 'Intermediário',
                    value: 'INTERMEDIARIO',
                  },
                  {
                    label: 'Avançado',
                    value: 'AVANCADO',
                  },
                ].map((item) => (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setExperience(item.value)}
                    className={`py-2.5 px-2 text-xs font-semibold rounded-xl border transition-all duration-150 ${experience === item.value
                        ? 'bg-purple-950/40 border-purple-500 text-purple-300 shadow-sm shadow-purple-900/50'
                        : 'bg-[#18191c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                  >
                    {item.label}
                  </button>

                ))}

              </div>

            </div>

            {/* Frequência Semanal */}
            <div>

              <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-2.5 text-neutral-300">

                <Clock
                  size={16}
                  className="text-purple-400"
                />

                Frequência Semanal (Dias/semana)

              </label>

              <div className="grid grid-cols-7 gap-1.5">

                {[1, 2, 3, 4, 5, 6, 7].map((dias) => (

                  <button
                    key={dias}
                    type="button"
                    onClick={() => setFrequencia(dias)}
                    className={`py-2.5 text-xs font-bold rounded-xl border transition-all duration-150 flex flex-col items-center justify-center ${frequencia === dias
                        ? 'bg-purple-950/50 border-purple-500 text-purple-300 shadow-sm shadow-purple-900/50'
                        : 'bg-[#18191c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                  >
                    <span>{dias}x</span>
                  </button>

                ))}

              </div>

            </div>

            {/* Salvar */}
            <button
              type="submit"
              className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-[0.98] text-white font-bold py-3.5 rounded-xl transition-all duration-150 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 mt-2"
            >

              <FloppyDisk
                size={18}
                weight="bold"
              />

              Salvar Alterações

            </button>

            {/* Personalizar Treino */}
            <button
              type="button"
              className="w-full bg-[#18191c] hover:bg-neutral-800 border border-purple-500/50 hover:border-purple-500 text-purple-300 font-bold py-3.5 rounded-xl transition-all duration-150 text-sm sm:text-base flex items-center justify-center gap-2"
            >

              <Barbell
                size={18}
                weight="bold"
              />

              Personalizar Meu Treino

            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

