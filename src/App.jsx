import { useEffect, useState } from 'react';
import { useStoreFiniquito } from '/src/store/useStoreFiniquito.jsx';
import Disclaimer from './components/Disclaimer';

const App = () => {
  const { isDark, toggleTheme } = useStoreFiniquito();
  const [sueldoDiario, setSueldoDiario] = useState('');
  const [diasTrabajados, setDiasTrabajados] = useState('');
  const [diasTrabajadosNoPagados, setDiasTrabajadosNoPagados] = useState('');
  const [diasAguinaldo, setDiasAguinaldo] = useState(15);
  const [diasVacaciones, setDiasVacaciones] = useState(12);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const calculateFiniquito = () => {
    const sueldo = parseFloat(sueldoDiario) || 0;
    const dias = parseFloat(diasTrabajados) || 0;

    // Cálculos
    const aguinaldo = (diasAguinaldo / 365) * dias * sueldo;
    const vacaciones = (diasVacaciones / 365) * dias * sueldo;
    const diasNoPagados = (parseFloat(diasTrabajadosNoPagados) * sueldo) || 0
    const primaVacacional = vacaciones * 0.25;
    
    return {
      aguinaldo: aguinaldo.toFixed(2),
      vacaciones: vacaciones.toFixed(2),
      primaVacacional: primaVacacional.toFixed(2),
      diasNoPagados: diasNoPagados.toFixed(2),
      total: (aguinaldo + vacaciones + primaVacacional + diasNoPagados).toFixed(2)
    };
  };

  const results = calculateFiniquito();

  return (
    <main className="min-h-screen p-4 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <section className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Calculadora de Finiquito</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {isDark ? '🌞' : '🌙'}
          </button>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {/* Sección de configuración */}
          <section className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Configuración</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Días de aguinaldo</label>
                <input
                  type="number"
                  value={diasAguinaldo}
                  onChange={(e) => setDiasAguinaldo(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Días de vacaciones</label>
                <input
                  type="number"
                  value={diasVacaciones}
                  onChange={(e) => setDiasVacaciones(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </section>

          {/* Sección de datos */}
          <section className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Datos del trabajador</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sueldo diario (MXN)</label>
                <input
                  type="number"
                  value={sueldoDiario}
                  onChange={(e) => setSueldoDiario(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Días trabajados</label>
                <input
                  type="number"
                  value={diasTrabajados}
                  onChange={(e) => setDiasTrabajados(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </section>
          <section className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Otros conceptos</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Dias trabajados no pagados</label>
                <input
                  type="number"
                  value={diasTrabajadosNoPagados}
                  onChange={(e) => setDiasTrabajadosNoPagados(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </section>
        </section>

        {/* Resultados */}
        <section className="mt-6 p-6 bg-blue-50 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Resultados</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ResultItem label="Aguinaldo" value={results.aguinaldo} />
            <ResultItem label="Vacaciones" value={results.vacaciones} />
            <ResultItem label="Prima vacacional" value={results.primaVacacional} />
            <ResultItem label="Dias Pendientes de pago" value={results.diasNoPagados} />
            <div className="md:col-span-2">
              <ResultItem label="Total a pagar" value={results.total} isTotal />
            </div>
          </div>
        </section>

        <Disclaimer />
      </div>
    </main>
  );
};

import PropTypes from 'prop-types';

const ResultItem = ({ label, value, isTotal = false }) => (
  <div className={`p-4 rounded-lg ${isTotal ? 'bg-blue-100 dark:bg-blue-900' : 'bg-white dark:bg-gray-700'}`}>
    <div className="flex justify-between items-center">
      <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
      <span className={`font-semibold ${isTotal ? 'text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-200'}`}>
        ${value}
      </span>
    </div>
  </div>
);

ResultItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isTotal: PropTypes.bool,
};

export default App;
