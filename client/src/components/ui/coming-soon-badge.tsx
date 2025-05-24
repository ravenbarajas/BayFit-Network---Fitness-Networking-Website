import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ComingSoonBadge() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30 hover:bg-electric-teal/30">
        Coming Soon
      </Badge>
    </motion.div>
  );
}
