type Treat = {
  id: string;
  title: string;
};

const treats: Treat[] = [
  { id: "1", title: "테스트 1" },
  { id: "2", title: "테스트 2" },
];

export async function getAll(): Promise<Treat[]> {
  return treats;
}
