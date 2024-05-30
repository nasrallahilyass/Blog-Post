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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



function Register() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
  return (
  <div className="flex flex-row h-screen">
    <div className="w-full h-screen flex justify-center items-center md:justify-center md:items-center">
      <div className="max-full-md w-full">
        <Card className="w-full h-auto">
          <CardHeader>
            <CardTitle className="text-center mb-2">Register</CardTitle>
            <CardDescription className="text-center">Register and enjoy a lot of tech blogs</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name:</Label>
                  <Input id="email" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email:</Label>
                  <Input id="email" placeholder="Enter your email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password:</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Confirme Password:</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Gender</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleLogin} variant="outline">Login</Button>
            <Button>Register</Button>
          </CardFooter> 
        </Card>
      </div>
    </div>
    <div className="w-full h-screen bg-slate-950 hidden md:block">
    </div>
  </div>

  )
}

export default Register;