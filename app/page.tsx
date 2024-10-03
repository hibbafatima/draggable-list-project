// use client
import DraggableList from '../components/DraggableList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Draggable List</h1>
          <DraggableList />
        </div>
      </div>
    </main>
  );
}
