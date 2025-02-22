import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SlideRightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

const SlideRight = ({
  children,
  delay = 0,
  className,
  ...props
}: SlideRightProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideRightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };
  return (
    <motion.div
      variants={slideRightVariants}
      initial="hidden"
      className={className}
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      ref={ref}
    >
      <div {...props}></div>
      {children}
    </motion.div>
  );
};

export default SlideRight;
