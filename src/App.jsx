import TreeSelectAntComponent from "./antdesign/TreeSelectAntComponent";
import TreeSelectComponent from "./primereact/TreeSelectComponent";
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <TreeSelectComponent />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TreeSelectAntComponent name="treeSelectField" control={control} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
