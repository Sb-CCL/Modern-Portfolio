import { ThemeProvider } from '@/components/theme/theme-provider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import NotFoundPage from './pages/not-found';
import Error from './pages/error';
import Home from './components/main/Home';
import AnimatedGridPattern from './components/magicui/animated-grid-pattern';
import { cn } from './lib/utils';

function App({ children }) {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='main-theme'
      >
        <BrowserRouter>
          <div className='relative min-h-screen flex flex-col dark:bg-[#1F1F1F]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/error' element={<Error />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            {children}
            <div>
              <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                width={50}
                height={50}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
                  'inset-x-0 inset-y-[-30%] skew-y-12'
                )}
              />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
