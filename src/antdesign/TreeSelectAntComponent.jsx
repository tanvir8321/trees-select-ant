import React, { useState } from "react";
import { Space, TreeSelect } from "antd";
import { Controller } from "react-hook-form";

const treeData = [
  {
    value: "parent 1-0",
    title: "parent 1-0",
    icon: "t",
    selectable: false,
    children: [
      {
        value: "leaf1",
        title: "leaf1",
        icon: "t",
      },
      {
        value: "leaf2",
        title: "leaf2",
        icon: "t",
      },
    ],
  },
  {
    value: "parent 1-1",
    title: "parent 1-1",
    icon: "t",
    children: [
      {
        value: "sss",
        title: "sss",
        icon: "t",
      },
    ],
  },
];

const TreeSelectAntComponent = ({ name, control }) => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Space direction="vertical">
      {/* <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
        treeData={treeData}
        treeIcon={showIcon}
      /> */}
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <TreeSelect
            {...field}
            treeLine={treeLine && { showLeafIcon }}
            style={{ width: 300 }}
            treeData={treeData}
            treeIcon={showIcon}
          />
        )}
      />
    </Space>
  );
};

export default TreeSelectAntComponent;
