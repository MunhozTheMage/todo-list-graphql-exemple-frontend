import "./App.css";
import { MainPage } from "./pages/Main";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <MainPage />
      </ApolloProvider>
    </div>
  );
}

export default App;
