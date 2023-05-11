// Changing the alias from '!' to '@' will cause the error to go away
import { Demo } from "!/Demo";

export default function Home() {
  return <Demo />;
}
