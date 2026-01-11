import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { VerificationStatus } from '@/types/tool';
import { cn } from '@/lib/utils';

type VerificationBadgeProps = {
  status: VerificationStatus;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const statusConfig = {
  verified: {
    label: 'Verified Free',
    icon: CheckCircle2,
    variant: 'verified' as const,
  },
  caution: {
    label: 'Use Caution',
    icon: AlertTriangle,
    variant: 'caution' as const,
  },
  flagged: {
    label: 'Flagged',
    icon: XCircle,
    variant: 'flagged' as const,
  },
  pending: {
    label: 'Pending Review',
    icon: Clock,
    variant: 'secondary' as const,
  },
};

const sizeClasses = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export const VerificationBadge = ({ 
  status, 
  showLabel = true, 
  size = 'md' 
}: VerificationBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  if (!showLabel) {
    return (
      <Icon 
        className={cn(
          sizeClasses[size],
          status === 'verified' && 'text-verified',
          status === 'caution' && 'text-caution',
          status === 'flagged' && 'text-flagged',
          status === 'pending' && 'text-muted-foreground'
        )} 
      />
    );
  }

  return (
    <Badge variant={config.variant} className="gap-1.5">
      <Icon className={sizeClasses[size]} />
      {config.label}
    </Badge>
  );
};
