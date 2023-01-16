import Banner from "./Banner";
import DataGrid from "./datagrid";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />

      <div className="mt-20">
        <Banner />
        <Form onSearchClick />
        <DataGrid />
      </div>
    </>
  );
}

export default App;
