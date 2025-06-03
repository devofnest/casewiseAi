@RestController
@RequestMapping("/api")
public class ApiController {

@Autowired
private ApiService apiService;

@GetMapping("/data")
public ResponseEntity<String> getData(@RequestParam String param) {
    String result = apiService.callPublicApi(param);
    return ResponseEntity.ok(result);
}
}

// 1. 원하는 데이터 형태의 객체를 먼저 만듦
// 2. 

// 3. 
// id: pk키 변하면 안됨 char
// title: string이여야 하고, 256비트 넘으면 안됨됨 string<int>
// summary : 문자 제한이 있어야 할 것 같음
// keyword: [] string배열로 할건지, 그러면 몇 비트로 할건지지


