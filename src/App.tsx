import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("50% offers now available");
  };
  return (
    <>
      <div>
        <Button
          label="Check new Offers"
          disabled={false}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default App;
