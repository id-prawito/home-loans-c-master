import { BrowserRouter as Router } from "react-router-dom";
import LayoutHome from "./components/LayoutHome";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <LayoutHome />
            </Router>
        </QueryClientProvider>
    );
}

export default App;
