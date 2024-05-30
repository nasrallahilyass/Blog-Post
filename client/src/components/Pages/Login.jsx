import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"



function Login() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register');
  }
  return (
  <div className="flex flex-row h-screen">
    <div className="w-full h-screen bg-slate-950 hidden md:block">

    </div>
    <div className="w-full h-screen flex justify-center items-center md:justify-center md:items-center">
      <div className="max-w-md w-full">
        <Card className="w-full h-auto">
          <CardHeader>
            <CardTitle className="text-center mb-2">LOGIN</CardTitle>
            <CardDescription className="text-center uppercase">Welcome To My Blog</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email:</Label>
                  <Input id="email" placeholder="Enter your email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password:</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleRegister} variant="outline">Register</Button>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>

  )
}

export default Login;