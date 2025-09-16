import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const SkeletonBox = styled.div`
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  width: 100%;
  aspect-ratio: 1/1;
  animation: ${pulse} 1.5s infinite;
`;

export default function Skeleton() {
  return <SkeletonBox />;
}
