import { DoorOpen } from 'lucide-react';

/** biome-ignore-all lint/performance/noImgElement: no using next.js*/
function Dashboard() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-10 overflow-hidden">
      <div>
        <DoorOpen className="text-neutral-300" size={150} />
      </div>
      <div className="flex flex-col gap-5 text-center">
        <strong className="font-semibold text-3xl antialiased">
          Sem sala?
        </strong>
        <p className="text-lg text-muted-foreground">
          Tente entrar em uma das salas no menu ao lado ou crie uma para fazer
          perguntas.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
