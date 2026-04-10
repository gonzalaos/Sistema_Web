import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './components/layout/AdminLayout';
import {IngredientsPage} from "./pages/admin/IngredientsPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="ingredients" replace />} />
                    <Route path="ingredients" element={<div><IngredientsPage/></div>} />
                    <Route path="products" element={<div>Pagina de productos en construccion</div>} />
                    <Route path="combos" element={<div>Pagina de combos en construccion</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}