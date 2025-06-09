import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Car, BarChart3, TrendingUp, Target, Eye, EyeOff, Shield, Zap, ArrowRight, Smartphone } from 'lucide-react'; 
// Asegúrate de que todos los íconos utilizados estén importados aquí, incluyendo EyeOff.

// Import the supabase client
import { supabase } from "@/integrations/supabase/client"; // Ensure this path is correct

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState(false); // New state for password visibility

  // States for the demo form (keeping it for now as it was in your original code)
  const [demoName, setDemoName] = React.useState('');
  const [demoPhone, setDemoPhone] = React.useState('');

  // Function to handle the demo form submission (simulation)
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitud de Demo:', { name: demoName, phone: demoPhone });
    alert(`¡Gracias ${demoName}! Nos pondremos en contacto contigo al ${demoPhone} para coordinar tu demo.`);
    setDemoName('');
    setDemoPhone('');
  };

  // WhatsApp number and message
  const whatsappNumber = '51976655097'; 
  const whatsappMessage = encodeURIComponent('Hola Drivelytics, me gustaría solicitar una demostración de su plataforma. Mi nombre es ' + demoName); 

  // Handle user login with Supabase
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      console.error('Login error:', authError.message);
    } else if (data.user) {
      console.log('User logged in:', data.user);
      setIsAuthenticated(true);
      // You might want to redirect the user or perform other actions after successful login
    } else {
      setError('An unexpected error occurred during login.');
    }
    setLoading(false);
  };

  // If authenticated, render the children components
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise, show the login/landing page
  return (
    <div className="min-h-screen bg-gradient-to-br from-drivelytics-purple-primary via-drivelytics-purple-secondary to-drivelytics-purple-accent relative overflow-hidden flex flex-col">
      {/* Animated background elements for a dynamic and modern touch */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background car image, visible and impressive, with a subtle overlay */}
      <div className="absolute inset-0 opacity-40"> 
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80" 
          alt="Vehículo de lujo moderno, simbolizando la industria automotriz y la innovación" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-drivelytics-purple-primary/70 to-drivelytics-purple-accent/50"></div> 
      </div>

      {/* Main content: Landing Page (left) and Access Form (right) */}
      <div className="relative z-10 flex flex-grow items-center justify-center p-4 md:p-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 lg:gap-12 items-center lg:items-center">
          
          {/* Left Side: Key Landing Page Message */}
          <div className="flex-1 flex flex-col space-y-8 text-white text-center lg:text-left overflow-y-auto lg:overflow-visible no-scrollbar p-4 lg:p-0">
            <div className="space-y-4">
              {/* Logo and Brand Name */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-12 h-15 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    // CAMBIO APLICADO AQUÍ: Usando import.meta.env.BASE_URL
                    src={`${import.meta.env.BASE_URL}favicon.ico`} 
                    alt="Logo de Drivelytics" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-4xl font-bold">Drivelytics</h1>
              </div>
              
              {/* Main Headline: Direct and impactful */}
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight">
                <span className="text-purple-400">Revoluciona</span> tus Ventas con <span className="text-white">Inteligencia de Datos.</span>
              </h2> 

              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl lg:max-w-none mx-auto">
                Transformamos los datos de tu concesionario en <span className="font-bold">decisiones que impulsan tus ventas y optimizan cada operación</span>. Olvídate de adivinar, empieza a <span className="font-bold">actuar con precisión</span>. Drivelytics es tu <span className="font-bold">centro de comando estratégico</span> para el mercado digital.
              </p>
            </div>

            {/* Key Benefits: Short, concise, and with visual impact */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start justify-center lg:justify-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all transform hover:scale-[1.01]">
                <BarChart3 className="w-8 h-8 flex-shrink-0 mt-1 text-white" />
                <div className="text-left">
                  <h3 className="font-semibold text-xl">Análisis en Tiempo Real</h3>
                  <p className="text-sm text-white/80">
                    Dashboards **claros y métricas clave** para control total.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all transform hover:scale-[1.01]">
                <TrendingUp className="w-8 h-8 flex-shrink-0 mt-1 text-white" />
                <div className="text-left">
                  <h3 className="font-semibold text-xl">Predicciones Precisas</h3>
                  <p className="text-sm text-white/80">
                    Pronósticos para **ventas e inventario**. Siempre un paso adelante.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all transform hover:scale-[1.01]">
                  <Target className="w-8 h-8 flex-shrink-0 mt-1 text-white" /> 
                  <div className="text-left">
                      <h3 className="font-semibold text-xl">Optimización de Ganancias</h3>
                      <p className="text-sm text-white/80">
                        Posiciona cada vehículo para una **venta rápida y rentable**.
                      </p>
                  </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all transform hover:scale-[1.01]">
                <Eye className="w-8 h-8 flex-shrink-0 mt-1 text-white" />
                <div className="text-left">
                  <h3 className="font-semibold text-xl">Dominio Competitivo</h3>
                  <p className="text-sm text-white/80">
                    Conoce tu mercado, **supera a tu competencia**.
                  </p>
                </div>
              </div>
            </div>

            {/* Numbers Demonstrating Success: Quick testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-300">+36</div>
                <div className="text-sm text-white/90">Concesionarios</div>
              </div>
              <div className="text-center p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-300">+52</div>
                <div className="text-sm text-white/90">Marcas</div>
              </div>
              <div className="text-center p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-300">24/7</div>
                <div className="text-sm text-white/90">Soporte</div>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x- bg-green-400 text-white text-base font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-500 transition-colors mt-8 lg:mt-6 animate-bounce-subtle" 
              >
                <Smartphone className="w-6 h-6" /> 
                <span>¡Háblanos por WhatsApp!</span>
              </a>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex-shrink-0 max-w-sm sm:max-w-md lg:max-w-none lg:w-96 mx-auto lg:mx-0 mt-8 lg:mt-0">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-drivelytics-purple-primary to-drivelytics-purple-secondary rounded-2xl flex items-center justify-center shadow-lg lg:hidden">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-purple-900">
                    Bienvenido
                  </CardTitle>
                  <CardDescription className="text-base text-gray-500">
                    Accede al <span className="font-bold">poder del análisis</span> para <span className="font-bold">vender más</span> y <span className="font-bold">dominar el mercado</span>.
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-4" onSubmit={handleLogin}> 
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="h-12 text-base focus:border-drivelytics-purple-primary focus:ring-1 focus:ring-drivelytics-purple-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 relative"> {/* Added relative for positioning the icon */}
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Contraseña
                    </Label>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'} // Toggle type based on showPassword state
                      placeholder="••••••••"
                      className="h-12 text-base focus:border-drivelytics-purple-primary focus:ring-1 focus:ring-drivelytics-purple-primary pr-10" // Add padding-right for the icon
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button" // Important: set to button type to prevent form submission
                      onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                      style={{ top: 'calc(50% + 8px)' }} // Adjust position
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 drivelytics-gradient hover:opacity-90 transition-opacity font-semibold text-base group shadow-lg"
                    disabled={loading} 
                  >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'} 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating information elements at the bottom */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 pb-4 pt-8 sm:pt-4 text-white/80 text-sm lg:text-base">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <Shield className="w-5 h-5" />
          <span>Tus datos, siempre protegidos con **encriptación SSL**.</span>
        </div>
        
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Zap className="w-5 h-5" />
          <span>**Potenciado por la inteligencia artificial** para análisis de vanguardia.</span>
        </div>
      </div>
    </div>
  );
};

export default AuthGuard;