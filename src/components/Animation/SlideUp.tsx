import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SlideUpProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

const SlideUp = ({
  children,
  delay = 0,
  className,
  ...props
}: SlideUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };
  return (
    <motion.div
      variants={slideUpVariants}
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

export default SlideUp;
