import { FallbackProps } from 'react-error-boundary';

function ApiErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <p>
        단픽을 스크랩하는 중 문제가 발생했어요😢 잠시 후에 다시 시도해 주세요.
      </p>
      <button>다시 시도하기</button>
    </div>
  );
}

export default ApiErrorFallback;
