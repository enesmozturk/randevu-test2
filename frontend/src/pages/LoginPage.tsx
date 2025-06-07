import { useForm } from "react-hook-form";
import { login } from "../auth/AuthService";
import { saveTokens } from "../auth/TokenStorage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data.phone, data.password);
      saveTokens(res.accessToken, res.refreshToken);
      navigate("/home");
    } catch (err) {
      alert("Giriş başarısız!"); // Daha sonra toast kullanılabilir
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Telefon Numarası"
        {...register("phone", { required: true })}
      />
      <input
        placeholder="Şifre"
        type="password"
        {...register("password", { required: true })}
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
}
