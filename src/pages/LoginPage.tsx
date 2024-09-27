import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { Button, Card, CardBody, CardHeader, Checkbox, Input } from "@nextui-org/react";
import { login } from "../slices/loginSlice";
import { useSnackbar } from "notistack";

export const LoginPage = () => {
    const navigate = useNavigate();
    const loginn = useSelector((state: RootState) => state.login);
    const isAuthenticated = loginn.logged;

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        user: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        user: '',
        password: ''
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function validateForm() {
        let valid = true;
        let newErrors = { user: '', password: '' };

        if (!form.user) {
            newErrors.user = 'El usuario es obligatorio';
            valid = false;
        }
        if (!form.password) {
            newErrors.password = 'La contraseña es obligatoria';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (validateForm()) {

            dispatch(login({
                logged: true,
                name: form.user
            }));
            enqueueSnackbar('Inicio de sesión exitoso', { variant: 'success' });
        } else {

            enqueueSnackbar('Por favor corrige los errores en el formulario.', { variant: 'error' });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="flex flex-col items-center">
                    <h1 className="text-center font-bold text-xl text-gray-900">
                        Inicia sesión en tu cuenta
                    </h1>
                </CardHeader>

                <CardBody>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <Input
                                label="Usuario"
                                placeholder="Ingrese su usuario"
                                name="user"
                                type="text"

                                value={form.user}
                                onChange={onChange}
                                isInvalid={!!errors.user}
                                errorMessage={errors.user}
                            />
                        </div>

                        <div>
                            <Input
                                label="Contraseña"
                                placeholder="Ingrese su contraseña"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={onChange}
                                isInvalid={!!errors.password}
                                errorMessage={errors.password}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Checkbox name="remember-me" size="sm">
                                Recuérdame
                            </Checkbox>
                        </div>

                        <Button type="submit" className="w-full" color="primary">
                            Iniciar Sesión
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};
