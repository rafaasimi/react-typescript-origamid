import {
  ResponsiveContainer,
  LineChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';
import { IVenda } from '../contexts/DataContext';

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(' ')[0];

    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[dia][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(dias).map(dia => ({...dia, data: dia.data.substring(5)}))
}

export function GraficoVendas({ data }: { data: IVenda[] }) {
  const transformedData = transformData(data);


  return (
    <div>
      <ResponsiveContainer height={400} width={'99%'}>
        <LineChart
          width={500}
          height={200}
          data={transformedData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Legend />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#A36AF9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#FBCB21"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
