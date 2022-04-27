import { Suspense } from "react";

export default function Prs() {
  return (
    <Suspense fallback={() => <>wait...</>}>
      <div className="App">
        <h1>Pull Requests</h1>
      </div>
    </Suspense>
  );
}
