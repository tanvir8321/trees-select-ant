import React, { useState, useEffect } from "react";
import { PrimeReactProvider } from "primereact/api";
import { TreeSelect } from "primereact/treeselect";
import { NodeService } from "./data";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const TreeSelectComponent = () => {
  const [nodes, setNodes] = useState(null);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <PrimeReactProvider>
      <div className="card flex justify-content-center">
        <TreeSelect
          value={selectedNodeKeys}
          onChange={(e) => setSelectedNodeKeys(e.value)}
          options={nodes}
          className="md:w-20rem w-full"
          placeholder="Select Items"
          selectionMode="leaf"
        ></TreeSelect>
      </div>
    </PrimeReactProvider>
  );
};

export default TreeSelectComponent;
