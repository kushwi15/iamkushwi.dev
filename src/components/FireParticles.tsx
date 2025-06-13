import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface FireParticlesProps {
  intensity?: 'low' | 'medium' | 'high';
}

const FireParticles = ({ intensity = 'medium' }: FireParticlesProps) => {
  const particleCount = {
    low: 40,
    medium: 80,
    high: 150
  };
  
  const particleSize = {
    low: { min: 1, max: 3 },
    medium: { min: 1, max: 4 },
    high: { min: 1, max: 5 }
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff4d1f", "#ff7e51", "#ff9b7a", "#ffb397", "#ffd1be"],
          },
          links: {
            color: "#ff4d1f",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: {
              min: 1,
              max: 3,
            },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: particleCount[intensity],
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: particleSize[intensity].min,
              max: particleSize[intensity].max,
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              minimumValue: 0.1,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default FireParticles;