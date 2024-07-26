import styled from "styled-components";

export const Header = styled.header`
    background: #1e2838;
    color: #fff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 제목과 아이콘을 양 끝으로 정렬 */
    padding: 0 20px; /* 양쪽에 패딩 추가 */
    box-sizing: border-box; /* 패딩이 요소의 전체 너비에 포함되도록 설정 */

    .input-nav {
        margin-left: 5rem !important;
        width: 25rem;
    }

    @media (max-width: 920px) {
        .input-nav {
            display: none;
        }
    }
`;
