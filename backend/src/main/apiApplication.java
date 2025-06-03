

@Service
public class api{

    private final RestTemplate restTemplate ;

    public String callPublicApi(String param) {
        String serviceKey = "xjtjt1jPo+g9ylao9diANQlYrBi5upb+07b0p2LHsPU+9vjBRW6riUQmFto8ZX16fluS/iz2ORmwXRWCS7OP6w==";
        String url = "https://apis.data.go.kr/9750000/PrecedentInfomationService" + serviceKey + "&param=" + param;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return response.getBody();
    }
}
