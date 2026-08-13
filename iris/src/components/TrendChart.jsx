import {LineChart, Line, ResponsiveContainer} from 'recharts'

export default function TrendChart({dados}){
    const pontos = dados.map((valor, i) => ({dia: i, valor}))

    return (
        <ResponsiveContainer width="100%" height={80}>
            <LineChart data={pontos} margin={{top: 8, right: 8, bottom: 8, left: 8}}>
                <Line 
                    type="monotone"
                    dataKey="valor"
                    stroke="var(--color-good)"
                    strokeWidth={3}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}