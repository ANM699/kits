import React, { useEffect } from "react";
import withRuler from "@components/ruler/withRuler";
function Demo({ setRuler }) {
  useEffect(() => {
    setRuler({ width: 100, height: 80, divide: 10 });
  }, [setRuler]);
  return <div>test</div>;
}

export default withRuler(Demo);
