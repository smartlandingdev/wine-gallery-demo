import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'slideUp';
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInLeft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInRight: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scale: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export const AnimatedSection = ({
  children,
  className = '',
  delay = 1,
  variant = 'fadeInUp'
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 5,
        delay: delay + 1.5,
        ease: "easeInOut"
      }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
};

// Animated Card with Hover Effects
export const AnimatedCard = ({
  children,
  className = '',
  delay = 0
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 4.5,
        delay: delay + 1.2,
        ease: "easeInOut"
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer = ({
  children,
  className = '',
  staggerDelay = 0.1
}: StaggeredContainerProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay + 1.5,
        delayChildren: 2
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Item
export const StaggeredItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  return (
    <motion.div
      className={className}
      variants={item}
      transition={{
        duration: 4.5,
        ease: "easeInOut" as any
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax Effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export const Parallax = ({ children, className = '', offset = 50 }: ParallaxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: -offset }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale on Scroll
export const ScaleOnScroll = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 5,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Rotate on Hover
export const RotateOnHover = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Float Animation
export const FloatingElement = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};
