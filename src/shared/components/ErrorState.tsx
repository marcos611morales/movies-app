import { EmptyState } from "@/shared/components/EmptyState";

type ErrorStateProps = {
  title: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
};

export function ErrorState({
  title,
  description,
  retryLabel,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <EmptyState
      icon="cloud-offline-outline"
      tone="error"
      actionVariant="secondary"
      accessibilityLiveRegion="polite"
      title={title}
      description={description}
      actionLabel={retryLabel}
      onActionPress={onRetry}
      className={className}
    />
  );
}
