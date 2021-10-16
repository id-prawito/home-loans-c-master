import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutHome from "../components/Layout/LayoutHome";
import LayoutPetugas from "../components/Layout/LayoutPetugas";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route path="/customer-login" component={Login} />
                    <Route path="/customer-register" component={Register} />
                    <Route path="/customer" component={LayoutHome} />
                    <Route path="/petugas" component={LayoutPetugas} />
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
